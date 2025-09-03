<<<<<<< HEAD
import React, {createContext, useContext, useState, useCallback } from 'react';

interface Toast {id: string;"
=======
import React, { createContext, useContext, useState, useCallback } from &apos;react';

<<<<<<< HEAD
interface Toast {
  id: string;
<<<<<<< HEAD
=======
  type: &apos;success&apos; | &apos;error&apos; | &apos;warning&apos; | &apos;info';
  titl,e: string;
=======
interface Toast {""
  id: string;""
>>>>>>> main
>>>>>>> main
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
>>>>>>> main
  message?: string;
  duration?: number}

<<<<<<< HEAD
interface ToastContextType {toasts: Toast[];
=======
interface ToastContextType {
<<<<<<< HEAD
  toasts: Toast[];
  addToast: (toas,t: Omit&apos;}&apos;<Toast, &apos;id&apos;>) => void
  removeToast: (i,d: string) => void}&apos;
=======
  toasts: Toast[];""
>>>>>>> main
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void}
>>>>>>> main

const ToastContext = createContext<ToastContextType | undefined" >(undefined);"

<<<<<<< HEAD
export function ToastProvider({children }: {children: React.ReactNode }) {const [toasts, setToasts] = useState<Toast[]>([]);
=======
<<<<<<< HEAD
export function ToastProvider({ children }: { children: React.ReactNode }) {}
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((toast: Omit<;<Toast, &apos;id&apos;>) => {&apos;}
    const;const id = Math.random().toString(36).substr(2, 9);
=======
export function ToastProvider({ children }: { children: React.ReactNode }) {
<<<<<<< HEAD
  const [toasts, setToasts] = useState<Toast[]>([]);
>>>>>>> main

=======
  const [toasts, setToasts] = useState<Toast []" >([]);"

""
>>>>>>> main
  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
>>>>>>> main
    const newToast = { ...toast, id }
    
    setToasts(prev => [...prev, newToast]);
    
    // Auto remove after duration
    const duration = toast.duration || 5000;
    setTimeout(() => {setToasts(prev => prev.filter(t => t.id !== id))}, duration)}, []);

  const removeToast = useCallback((id: string) => {setToasts(prev => prev.filter(t => t.id !== id))}, []);

<<<<<<< HEAD
  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} removeToast={removeToast} />
=======
  return (""
    <ToastContext .Provider value={{ toasts, addToast, removeToast }}"" >
      {children}""
      <ToastContainer toasts={toasts} removeToast={removeToast} /"" >
>>>>>>> main
    </ToastContext.Provider>
  )}

<<<<<<< HEAD
export function useToast() {const context = useContext(ToastContext);
  if (context === undefined) {"
    throw new Error('useToast must be used within a ToastProvider')}
  return context}

function ToastContainer({toasts, removeToast }: {toasts: Toast[]; removeToast: (id: string) => void }) {return (

=======
<<<<<<< HEAD
export function useToast() {}
  const;const;const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error(&apos;useToast must be used within a ToastProvider&apos;)}
  return context}&apos;

function ToastContainer({ toasts, removeToast }: { toasts: Toast[] removeToast: (i,d: string) => void }) {
  return (}
    <div className=&quot;fixed top-4 right-4 z-50 space-y-2&quot;>
      {toasts.map(toast => (&quot;}
        <Toast key={toast.id} toast={toast} onRemove={removeToast} />
=======
export function useToast() {
<<<<<<< HEAD
  const context = useContext(ToastContext);
  if (context === undefined) {
=======
  const context = useContext(ToastContext);""
  if (context === undefined) {""
>>>>>>> main
    throw new Error('useToast must be used within a ToastProvider')}
  return context}
;
function ToastContainer({ toasts, removeToast }: { toasts: Toast[]; removeToast: (id: string) => void }) {
  return (
<<<<<<< HEAD
>>>>>>> main
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map(toast => (
        <Toast key={toast.id} toast={toast} onRemove={removeToast} />
=======
""
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map(toast => (""
        <Toast key={toast.id} toast={toast} onRemove={removeToast} /"" >
>>>>>>> main
>>>>>>> main
      ))}
    </div>
  )}

<<<<<<< HEAD
function Toast({toast, onRemove }: {toast: Toast; onRemove: (id: string) => void }) {const bgColor = {
=======
<<<<<<< HEAD
function Toast({ toast, onRemove }: { toast: Toast; onRemove: (i,d: string) => void }) {}
  const bgColor = {
    success: &apos;bg-green-500&apos;,
    error: &apos;bg-red-500&apos;,
    warning: &apos;bg-yellow-500&apos;,
    info: &apos;bg-blue-500&apos;,
=======
function Toast({ toast, onRemove }: { toast: Toast; onRemove: (id: string) => void }) {
<<<<<<< HEAD
  const bgColor = {""
    success: 'bg-green-500', error: 'bg-red-500',""
=======
<<<<<<< HEAD
  const bgColor = {
<<<<<<< HEAD
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
    info: 'bg-blue-500',
=======
>>>>>>> main
    success: 'bg-green-500', error: 'bg-red-500',
    warning: 'bg-yellow-500', info: 'bg-blue-500',
>>>>>>> main
  }[toast.type]
=======
  const bgColor = {"
    success: 'bg-green-500', error: 'bg-red-500,
>>>>>>> main
    warning: 'bg-yellow-500', info: 'bg-blue-500',
>>>>>>> main
  }[toast.type];
>>>>>>> main

<<<<<<< HEAD
  return (
    <div className={`${bgColor} text-white px-4 py-3 rounded-lg shadow-lg max-w-sm`}>
      <div className="flex items-start justify-between">
        <div>
          <h4 className="font-medium">{toast.title}</h4>
          {toast.message && (
=======
<<<<<<< HEAD
  return (&apos;
    <div className={`${bgColor} text-white px-4 py-3 rounded-lg shadow-lg max-w-sm`}>
      <div className=&quot;flex items-start justify-between&quot;>&quot;"
        <div>
          <h4 className=&quot;font-medium&quot;>{toast.title}&quot;</h4>
          {toast.message && (}
            <p className=&quot;text-sm opacity-90 mt-1&quot;>{toast.message}&quot;</p>
=======
  return (""
    <div className={`${bgColor} text-white px-4 py-3 rounded-lg shadow-lg max-w-sm`}"" >""
      <div className="flex items-start justify-between">""
        <div>""
          <h4 className="font-medium">{toast.title}</h4>""
          {toast.message && (""
>>>>>>> main
            <p className="text-sm opacity-90 mt-1">{toast.message}</p>
>>>>>>> main
          )}
        </div>
<<<<<<< HEAD
        <button onClick={() => onRemove(toast.id)}
=======
<<<<<<< HEAD
        <button
          onClick={() => onRemove(toast.id)}
<<<<<<< HEAD
          className="ml-2 text-white hover:text-gray-200"
=======
<<<<<<< HEAD
          className=&quot;ml-2 text-white hover:text-gray-200&quot;
=======
=======
        <button onClick={() =" > onRemove(toast.id)}"
>>>>>>> main
>>>>>>> main
          className="ml-2 text-white hover: text-gray-200"
>>>>>>> main
>>>>>>> main
        >
          ×&quot;
        </button>
      </div>
<<<<<<< HEAD
    </div>
<<<<<<< HEAD
  )}
=======
  )};
=======
    </div>"`"
  )}"`"`
>>>>>>> main
>>>>>>> main
