import React, { useState, useEffect } from 'react';
import './App.css';

interface Task {
  id: number;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      try {
        const parsedTasks = JSON.parse(savedTasks).map((task: any) => ({
          ...task,
          createdAt: new Date(task.createdAt)
        }));
        setTasks(parsedTasks);
      } catch (error) {
        console.error('Error loading tasks:', error);
      }
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date()
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const filteredTasks = tasks.filter(task => {
    switch (filter) {
      case 'active':
        return !task.completed;
      case 'completed':
        return task.completed;
      default:
        return true;
    }
  });

  const activeTasksCount = tasks.filter(task => !task.completed).length;
  const completedTasksCount = tasks.filter(task => task.completed).length;

  return (
    <div className="app">
      <header className="app-header">
        <h1>🚀 Zion Task Manager</h1>
        <p>A modern, efficient task management application</p>
      </header>

      <main className="app-main">
        <div className="task-input-section">
          <div className="input-group">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addTask()}
              placeholder="Add a new task..."
              className="task-input"
            />
            <button onClick={addTask} className="add-button">
              Add Task
            </button>
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-buttons">
            <button
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              All ({tasks.length})
            </button>
            <button
              className={filter === 'active' ? 'active' : ''}
              onClick={() => setFilter('active')}
            >
              Active ({activeTasksCount})
            </button>
            <button
              className={filter === 'completed' ? 'active' : ''}
              onClick={() => setFilter('completed')}
            >
              Completed ({completedTasksCount})
            </button>
          </div>
          {completedTasksCount > 0 && (
            <button onClick={clearCompleted} className="clear-button">
              Clear Completed
            </button>
          )}
        </div>

        <div className="tasks-section">
          {filteredTasks.length === 0 ? (
            <div className="empty-state">
              <p>
                {filter === 'all' 
                  ? "No tasks yet. Add one above!" 
                  : filter === 'active'
                  ? "No active tasks. Great job!"
                  : "No completed tasks yet."
                }
              </p>
            </div>
          ) : (
            <ul className="task-list">
              {filteredTasks.map(task => (
                <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
                  <div className="task-content">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="task-checkbox"
                    />
                    <span className="task-text">{task.text}</span>
                    <span className="task-date">
                      {task.createdAt.toLocaleDateString()}
                    </span>
                  </div>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="delete-button"
                    title="Delete task"
                  >
                    🗑️
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="stats-section">
          <div className="stat">
            <span className="stat-number">{tasks.length}</span>
            <span className="stat-label">Total Tasks</span>
          </div>
          <div className="stat">
            <span className="stat-number">{activeTasksCount}</span>
            <span className="stat-label">Active</span>
          </div>
          <div className="stat">
            <span className="stat-number">{completedTasksCount}</span>
            <span className="stat-label">Completed</span>
          </div>
        </div>
      </main>

      <footer className="app-footer">
        <p>Built with React, TypeScript, and ❤️ by Zion Team</p>
      </footer>
    </div>
  );
}

