import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('App Component', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
  });

  const waitForAppToLoad = async () => {
    await waitFor(() => {
      expect(screen.getByText('Zion Tech Group')).toBeInTheDocument();
    }, { timeout: 2000 });
  };

  test('renders the app title', async () => {
    render(<App />);
    await waitForAppToLoad();
  });

  test('allows adding a new task', async () => {
    render(<App />);
    
    // Wait for loading to complete
    await waitForAppToLoad();
    
    // Navigate to task manager
    const taskManagerButton = screen.getByText('🚀 Try Task Manager');
    fireEvent.click(taskManagerButton);
    
    const input = screen.getByPlaceholderText('Add a new task...');
    const addButton = screen.getByText('Add Task');
    
    fireEvent.change(input, { target: { value: 'Test task' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('Test task')).toBeInTheDocument();
  });

  test('allows adding a task by pressing Enter', async () => {
    render(<App />);
    
    // Wait for loading to complete
    await waitForAppToLoad();
    
    // Navigate to task manager
    const taskManagerButton = screen.getByText('🚀 Try Task Manager');
    fireEvent.click(taskManagerButton);
    
    const input = screen.getByPlaceholderText('Add a new task...');
    
    fireEvent.change(input, { target: { value: 'Enter task' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    
    expect(screen.getByText('Enter task')).toBeInTheDocument();
  });

  test('allows toggling task completion', async () => {
    render(<App />);
    
    // Wait for loading to complete
    await waitForAppToLoad();
    
    // Navigate to task manager
    const taskManagerButton = screen.getByText('🚀 Try Task Manager');
    fireEvent.click(taskManagerButton);
    
    const input = screen.getByPlaceholderText('Add a new task...');
    const addButton = screen.getByText('Add Task');
    
    fireEvent.change(input, { target: { value: 'Toggle task' } });
    fireEvent.click(addButton);
    
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    
    expect(checkbox).toBeChecked();
  });

  test('allows deleting a task', async () => {
    render(<App />);
    
    // Wait for loading to complete
    await waitForAppToLoad();
    
    // Navigate to task manager
    const taskManagerButton = screen.getByText('🚀 Try Task Manager');
    fireEvent.click(taskManagerButton);
    
    const input = screen.getByPlaceholderText('Add a new task...');
    const addButton = screen.getByText('Add Task');
    
    fireEvent.change(input, { target: { value: 'Delete task' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('Delete task')).toBeInTheDocument();
    
    const deleteButton = screen.getByTitle('Delete task');
    fireEvent.click(deleteButton);
    
    expect(screen.queryByText('Delete task')).not.toBeInTheDocument();
  });

  test('filters tasks correctly', async () => {
    render(<App />);
    
    // Wait for loading to complete
    await waitForAppToLoad();
    
    // Navigate to task manager
    const taskManagerButton = screen.getByText('🚀 Try Task Manager');
    fireEvent.click(taskManagerButton);
    
    const input = screen.getByPlaceholderText('Add a new task...');
    const addButton = screen.getByText('Add Task');
    
    // Add two tasks
    fireEvent.change(input, { target: { value: 'Active task' } });
    fireEvent.click(addButton);
    
    fireEvent.change(input, { target: { value: 'Completed task' } });
    fireEvent.click(addButton);
    
    // Complete the second task
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[1]);
    
    // Test active filter
    const activeButton = screen.getByRole('button', { name: /Active \(\d+\)/ });
    fireEvent.click(activeButton);
    
    expect(screen.getByText('Active task')).toBeInTheDocument();
    expect(screen.queryByText('Completed task')).not.toBeInTheDocument();
    
    // Test completed filter
    const completedButton = screen.getByRole('button', { name: /Completed \(\d+\)/ });
    fireEvent.click(completedButton);
    
    expect(screen.queryByText('Active task')).not.toBeInTheDocument();
    expect(screen.getByText('Completed task')).toBeInTheDocument();
  });

  test('shows correct task counts', async () => {
    render(<App />);
    
    // Wait for loading to complete
    await waitForAppToLoad();
    
    // Navigate to task manager
    const taskManagerButton = screen.getByText('🚀 Try Task Manager');
    fireEvent.click(taskManagerButton);
    
    const input = screen.getByPlaceholderText('Add a new task...');
    const addButton = screen.getByText('Add Task');
    
    // Add three tasks
    fireEvent.change(input, { target: { value: 'Task 1' } });
    fireEvent.click(addButton);
    
    fireEvent.change(input, { target: { value: 'Task 2' } });
    fireEvent.click(addButton);
    
    fireEvent.change(input, { target: { value: 'Task 3' } });
    fireEvent.click(addButton);
    
    // Complete one task
    const checkboxes = screen.getAllByRole('checkbox');
    fireEvent.click(checkboxes[0]);
    
    // Check stats
    expect(screen.getByText('3')).toBeInTheDocument(); // Total
    expect(screen.getByText('2')).toBeInTheDocument(); // Active
    expect(screen.getByText('1')).toBeInTheDocument(); // Completed
  });

  test('loads tasks from localStorage on mount', async () => {
    const mockTasks = [
      { id: 1, text: 'Saved task', completed: false, createdAt: new Date().toISOString() }
    ];
    localStorageMock.getItem.mockReturnValue(JSON.stringify(mockTasks));
    
    render(<App />);
    
    // Wait for loading to complete
    await waitForAppToLoad();
    
    // Navigate to task manager
    const taskManagerButton = screen.getByText('🚀 Try Task Manager');
    fireEvent.click(taskManagerButton);
    
    expect(screen.getByText('Saved task')).toBeInTheDocument();
  });

  test('saves tasks to localStorage when tasks change', async () => {
    render(<App />);
    
    // Wait for loading to complete
    await waitForAppToLoad();
    
    // Navigate to task manager
    const taskManagerButton = screen.getByText('🚀 Try Task Manager');
    fireEvent.click(taskManagerButton);
    
    const input = screen.getByPlaceholderText('Add a new task...');
    const addButton = screen.getByText('Add Task');
    
    fireEvent.change(input, { target: { value: 'Save task' } });
    fireEvent.click(addButton);
    
    await waitFor(() => {
      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        'tasks',
        expect.stringContaining('Save task')
      );
    });
  });
});