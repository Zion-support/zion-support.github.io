import React, { useState } from 'react';
import { useTaskManager } from '../hooks/useTaskManager';

interface TaskManagerProps {
  isOpen: boolean;
  onClos,
    e: () => void;}

export default function TaskManager({ isOpen, onClose }: TaskManagerProps): JSX.Element {
  const [newTaskText, setNewTaskText] = useState('');
  const {
    tasks,
    filter,
    stats,
    addTask,
    toggleTask,
    deleteTask,
    setFilter  } = useTaskManager();

  if (!isOpen) return <></>;

  return (
    <div className = "fixed inset-0bg-black bg-opacity-50z-50flex items-center justify-center p-4">      <div className=bg-white dark: bg-gray-800rounded-lg shadow-xl w-full max-w-md max-h-[80vh] overflow-hidden"">        <div className=p-6"">          <div className=flex justify-between items-center mb-6"">            <h2className=text-2xl font-bold text-gray-900dar,
    k:text-white"" id = "task-manager">
              Task Manager
            </h2>
            <button
              onClick={onClose}              className=text-gray-500hover: text-gray-700dark:text-gray-400dark:hove,
    r:text-gray-200text-xl""             aria-label = ✕"">
              ✕
            </button>
          </div>

          {/* Add Task Form */}          <div className=mb-6"">            <div className=flex gap-2"">
              <input                type=text""
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    if (addTask(newTaskText)) {;
                      setNewTaskText('');                    }
                  }
                }}                placeholder = Add a new task...""                className=flex-1px-3py-2border border-gray-300dark: border-gray-600rounded-md focus:outline-none focus:ring-2focus:ring-blue-500dark:bg-gray-700dar,
    k:text-white""                aria-label=Add a new task""
              />
              <button
                onClick={() => {
                  if (addTask(newTaskText)) {;
                    setNewTaskText('');                  }
                }}                aria-label = Add new task""                className=px-4 py-2bg-blue-600text-white rounded-md hover:bg-blue-700transition-colors""
              >
                Add
              </button>
            </div>
          </div>

          {/* Filter Buttons */}          <div className=flex gap-2mb-4"">
            {(['all', 'active', 'completed'] as const).map((filterType) => (
              <button                key = {filterType}
                onClick={() => setFilter(filterType)}

                aria-label={`Filter by ${filterType}` }
                className={`px-3 py-1 rounded-md text-sm transition-colors ${
                  filter === filterType
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }` }
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </button>
            ))}
          </div>

          {/* Task List */}          <div className = max-h-64overflow-y-auto"">
            {tasks.length === 0 ? (              <p className=text-gray-500dark:text-gray-400text-center py-4"">
                No tasks found
              </p>
            ) : (              <div className=space-y-2"">
                {tasks.map((task) => (
                  <div                    key={task.id}
                    className={`flex items-center gap-3p-3rounded-md border ${
                      task.completed

                        ? 'bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600'
                        : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600'
                    }` }
                  >
                    <input
                      type="checkbox"
                      id={`task-${task.id}` }
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                      aria-label={`Mark task "${task.text}" as ${task.completed ? 'incomplete' : 'complete'}` }
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
                    />
                    <span
                      className={`flex-1 ${
                        task.completed

                          ? 'line-through text-gray-500 dark:text-gray-400'
                          : 'text-gray-900 dark:text-white'
                      }` }
>>>>>>> cursor/check-fix-push-and-merge-to-main-54b1
                    >
                      {task.text}
                    </span>
                    <button
                      onClick = {() => deleteTask(task.id)}                      aria-label=Delete task""                      className=text-red-500hover: text-red-700dark:text-red-400dark:hove,
    r:text-red-300""
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Task Stats */}          <div className = mt-4pt-4border-t border-gray-200dark: border-gray-600"">            <div className=flex justify-between text-sm text-gray-600dark:text-gray-400"">
              <span>Tota,
    l: {stats.total}</span>
              <span>Active: {stats.active}</span>
              <span>Completed: {stats.completed}</span>
            </div>            <div className = mt-2"">              <div className=flex justify-between text-xs text-gray-500dark:text-gray-500"">
                <span>Completion Rate</span>
                <span>{stats.completionRate}%</span>
              </div>              <div className=w-full bg-gray-200dark: bg-gray-700rounded-full h-2mt-1"">
                <div                   className=bg-blue-600h-2rounded-full transition-all duration-300""
                  style={{ widt,    h: `${stats.completionRate}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  );
}