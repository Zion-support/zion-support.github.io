import { useState, useEffect } from 'react';
import { storage } from '../utils/helpers';

export interface Task {
  id: number;
  text: string;
  completed: boolean;
  createdAt: string;
  updatedAt?: string;
}

export type FilterType = 'all' | 'active' | 'completed';

export const useTaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<FilterType>('all');

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = storage.get<Task[]>('tasks', []);
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    storage.set('tasks', tasks);
  }, [tasks]);

  const addTask = (text: string): boolean => {
    if (!text.trim()) return false;
    
    const newTask: Task = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    setTasks(prev => [...prev, newTask]);
    return true;
  };

  const toggleTask = (id: number): boolean => {
    setTasks(prev => prev.map(task => 
      task.id === id 
        ? { ...task, completed: !task.completed, updatedAt: new Date().toISOString() }
        : task
    ));
    return true;
  };

  const updateTask = (id: number, text: string): boolean => {
    if (!text.trim()) return false;
    
    setTasks(prev => prev.map(task => 
      task.id === id 
        ? { ...task, text: text.trim(), updatedAt: new Date().toISOString() }
        : task
    ));
    return true;
  };

  const deleteTask = (id: number): boolean => {
    setTasks(prev => prev.filter(task => task.id !== id));
    return true;
  };

  const clearCompleted = (): number => {
    const completedCount = tasks.filter(task => task.completed).length;
    setTasks(prev => prev.filter(task => !task.completed));
    return completedCount;
  };

  const markAllCompleted = (): number => {
    const uncompletedCount = tasks.filter(task => !task.completed).length;
    setTasks(prev => prev.map(task => ({ 
      ...task, 
      completed: true, 
      updatedAt: new Date().toISOString() 
    })));
    return uncompletedCount;
  };

  const markAllActive = (): number => {
    const completedCount = tasks.filter(task => task.completed).length;
    setTasks(prev => prev.map(task => ({ 
      ...task, 
      completed: false, 
      updatedAt: new Date().toISOString() 
    })));
    return completedCount;
  };

  const getFilteredTasks = (): Task[] => {
    switch (filter) {
      case 'active':
        return tasks.filter(task => !task.completed);
      case 'completed':
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  };

  const getTaskStats = () => {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const active = total - completed;
    
    return {
      total,
      completed,
      active,
      completionRate: total > 0 ? Math.round((completed / total) * 100) : 0
    };
  };

  const searchTasks = (query: string): Task[] => {
    if (!query.trim()) return tasks;
    
    const lowercaseQuery = query.toLowerCase();
    return tasks.filter(task => 
      task.text.toLowerCase().includes(lowercaseQuery)
    );
  };

  const sortTasks = (sortBy: 'created' | 'updated' | 'text' | 'completed'): Task[] => {
    const sortedTasks = [...tasks];
    
    switch (sortBy) {
      case 'created':
        return sortedTasks.sort((a, b) => 
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      case 'updated':
        return sortedTasks.sort((a, b) => {
          const aUpdated = a.updatedAt || a.createdAt;
          const bUpdated = b.updatedAt || b.createdAt;
          return new Date(bUpdated).getTime() - new Date(aUpdated).getTime();
        });
      case 'text':
        return sortedTasks.sort((a, b) => a.text.localeCompare(b.text));
      case 'completed':
        return sortedTasks.sort((a, b) => {
          if (a.completed === b.completed) return 0;
          return a.completed ? 1 : -1;
        });
      default:
        return sortedTasks;
    }
  };

  const exportTasks = (): string => {
    return JSON.stringify(tasks, null, 2);
  };

  const importTasks = (jsonData: string): boolean => {
    try {
      const importedTasks = JSON.parse(jsonData);
      if (Array.isArray(importedTasks)) {
        setTasks(importedTasks);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Failed to import tasks:', error);
      return false;
    }
  };

  const duplicateTask = (id: number): boolean => {
    const task = tasks.find(t => t.id === id);
    if (!task) return false;
    
    const duplicatedTask: Task = {
      ...task,
      id: Date.now(),
      text: `${task.text} (Copy)`,
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    setTasks(prev => [...prev, duplicatedTask]);
    return true;
  };

  const moveTask = (id: number, direction: 'up' | 'down'): boolean => {
    const currentIndex = tasks.findIndex(task => task.id === id);
    if (currentIndex === -1) return false;
    
    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex < 0 || newIndex >= tasks.length) return false;
    
    const newTasks = [...tasks];
    [newTasks[currentIndex], newTasks[newIndex]] = [newTasks[newIndex], newTasks[currentIndex]];
    setTasks(newTasks);
    return true;
  };

  return {
    tasks,
    filter,
    setFilter,
    addTask,
    toggleTask,
    updateTask,
    deleteTask,
    clearCompleted,
    markAllCompleted,
    markAllActive,
    getFilteredTasks,
    getTaskStats,
    searchTasks,
    sortTasks,
    exportTasks,
    importTasks,
    duplicateTask,
    moveTask
  };
};