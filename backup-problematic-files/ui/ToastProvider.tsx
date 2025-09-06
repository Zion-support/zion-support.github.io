<<<<<<< HEAD
<<<<<<< HEAD:components/ui/ToastProvider.tsx
import React, { create_context, useCallback, useContext, useMemo, useState } from 'react';
=======
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/ui/ToastProvider.tsx
import { AnimatePresence, motion } from 'framer-motion';
export type ToastVariant = 'default' | 'success' | 'error' | 'info';
export type Toast = {
  id: string;
=======
import React, { create_context, useCallback, useContext, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
export type ToastVariant = 'default' | 'success' | 'error' | 'info';

export type Toast = {
  id: string;

>>>>>>> main
  title?: string;
  description?: string;
  variant?: ToastVariant;
  action_label?: string;
  on_action?: () => void;
  duration_ms?: number;
}
<<<<<<< HEAD
<<<<<<< HEAD:components/ui/ToastProvider.tsx
=======



export type ToastContextValue = {
=======
;
export type ToastContextValue = {;
=======

export type ToastContextValue = {


  toasts: Toast[];
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/ui/ToastProvider.tsx
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  addToast: (toast: Omit<Toast, 'id'>) => string;
  removeToast: (id: string) => void;
  clearToasts: () => void;
}


;


const ToastContext = createContext<ToastContextValue | undefined>(undefined);
export function ToastProvider({ children }: { children: React.ReactNode }) {const [toasts, setToasts] = useState<Toast[]>([]);
  const removeToast = useCallback((id: string) => {;
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);


  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {;
    const id = `${Date.now()}_${Math.random().toString(36).slice(2)}`;

=======

const ToastContext = createContext<ToastContextValue | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = `${Date.now()}_${Math.random().toString(36).slice(2)}`



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
    const item: Toast = { id, variant: 'default', durationMs: 4000, ...toast }
    setToasts(prev => [...prev, item]);
    if (item.durationMs && item.durationMs > 0) {setTimeout(() => removeToast(id), item.durationMs);
=======
>>>>>>> main
export type ToastContextValue = {
  toasts: Toast[];
  add_toast: (toast: Omit < Toast, 'id'>) => string;
  remove_toast: (id: string) => void;
  clear_toasts: () => void;
}
const ToastContext = create_context < ToastContextValue | undefined>(undefined);
export /**
 * ToastProvider - Function description
 */
function ToastProvider() {
  const [toasts, set_toasts] = useState < Toast[]>([]);
  const remove_toast = useCallback ((id: string) => {
    set_toasts (prev => prev.filter (t => t.id !== id));
  }, []);
  const add_toast = useCallback ((toast: Omit < Toast, 'id'>) => {
    const id = `${Date.now ()}_${Math.random ().to_string (36).slice (2)}`;
    const item: Toast = { id, variant: 'default', duration_ms: 4000, ...toast }
    set_toasts (prev => [...prev, item]);
    // Check condition
if ( {) {
  $2
}
      set_timeout (() => remove_toast (id), item.duration_ms);
<<<<<<< HEAD
=======
<<<<<<< HEAD:components/ui/ToastProvider.tsx
<<<<<<< HEAD
export type ToastContextValue = {toasts: Toast[];
=======

export type ToastContextValue = {
=======
;
export type ToastContextValue = {;
=======

export type ToastContextValue = {
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/ui/ToastProvider.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  toasts: Toast[];
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/ui/ToastProvider.tsx
  addToast: (toast: Omit<Toast, 'id'>) => string;
  removeToast: (id: string) => void;
  clearToasts: () => void;
}
<<<<<<< HEAD:components/ui/ToastProvider.tsx
<<<<<<< HEAD
=======
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const ToastContext = createContext<ToastContextValue | undefined>(undefined);
export function ToastProvider({ children }: { children: React.ReactNode }) {const [toasts, setToasts] = useState<Toast[]>([]);
  const removeToast = useCallback((id: string) => {;
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);
<<<<<<< HEAD
  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {const id = `${Date.now()}_${Math.random().toString(36).slice(2)}`;
=======
  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {;
    const id = `${Date.now()}_${Math.random().toString(36).slice(2)}`;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

const ToastContext = createContext<ToastContextValue | undefined>(undefined)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id))
  }, [])

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = `${Date.now()}_${Math.random().toString(36).slice(2)}`
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/ui/ToastProvider.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/ui/ToastProvider.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    const item: Toast = { id, variant: 'default', durationMs: 4000, ...toast }
    setToasts(prev => [...prev, item]);
    if (item.durationMs && item.durationMs > 0) {setTimeout(() => removeToast(id), item.durationMs);
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/ui/ToastProvider.tsx
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
    }
    return id;
  }, [remove_toast]);
  const clear_toasts = useCallback (() => set_toasts ([]), []);
  const value = useMemo (() => ({ toasts, add_toast, remove_toast, clear_toasts }), [toasts, add_toast, remove_toast, clear_toasts]);
  return (
    <ToastContext.Provider value={value}>;
      {children}
<<<<<<< HEAD
<<<<<<< HEAD:components/ui/ToastProvider.tsx
<div className=&quot;fixed bottom - 4 right - 4 z-[100] space - y-3 w-[90vw] max - w-sm & quot;>;
        <AnimatePresence>;
          {toasts.map (t => (
            <motion.div;
=======
<<<<<<< HEAD:components/ui/ToastProvider.tsx
<div className=&quot;fixed bottom-4 right-4 z-[100] space-y-3 w-[90vw] max-w-sm&quot;>
=======
      <div className="fixed bottom-4 right-4 z-[100] space-y-3 w-[90vw] max-w-sm">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/ui/ToastProvider.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/ui/ToastProvider.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        <AnimatePresence>
          {toasts.map(t => (
            <motion.div
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/ui/ToastProvider.tsx
=======


      <div className="fixed bottom-4 right-4 z-[100] space-y-3 w-[90vw] max-w-sm">


        <AnimatePresence>
          {toasts.map(t => (
            <motion.div
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
              key={t.id}
              initial={{ opacity: 0, coordinate_y: 16, scale: 0.98 }}
              animate={{ opacity: 1, coordinate_y: 0, scale: 1 }}
              exit={{ opacity: 0, coordinate_y: 8, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
<<<<<<< HEAD
              className={`rounded - md border shadow - lg p - 3 backdrop - blur bg - white / 80 dark:bg - black / 60 ${
                t.variant === 'success' ? 'border - emerald - 400 / 40' : t.variant === 'error' ? 'border - rose - 400 / 40' : t.variant === 'info' ? 'border - sky - 400 / 40' : 'border - gray - 300 / 40 dark:border - gray - 700 / 40';
              }`}
<<<<<<< HEAD:components/ui/ToastProvider.tsx
>;
              <div className=&quot;flex items - start gap - 3&quot;>;
                <div className={`mt - 1 h - 2 w - 2 rounded - full ${
                  t.variant === 'success' ? 'bg - emerald - 400' : t.variant === 'error' ? 'bg - rose - 400' : t.variant === 'info' ? 'bg - sky - 400' : 'bg - gray - 400';
                }`} />;
                <div className=&quot;flex - 1&quot;>;
                  {t.title && <div className=&quot;font - medium text - sm & quot;>{t.title}</div>}
                  {t.description && <div className=&quot;text - xs opacity - 80 mt - 0.5 & quot;>{t.description}</div>}
                  {t.action_label && t.on_action && (
                    <button on_click={t.on_action} className=&quot;mt - 2 text - xs underline underline - offset - 2 hover:opacity - 80 & quot;>;
                      {t.action_label}
                    </button>)}
</div>;
                <button on_click={() => remove_toast (t.id)} className=&quot;text - xs opacity - 60 hover:opacity - 100 & quot;>×</button>;
              </div>;
            </motion.div>))}
=======
<<<<<<< HEAD:components/ui/ToastProvider.tsx
>
              <div className=&quot;flex items-start gap-3&quot;>
=======
            >
              <div className="flex items-start gap-3">
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/ui/ToastProvider.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/ui/ToastProvider.tsx
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======

              className={`rounded - md border shadow - lg p - 3 backdrop - blur bg - white / 80 dark:bg - black / 60 ${
                t.variant === 'success' ? 'border - emerald - 400 / 40' : t.variant === 'error' ? 'border - rose - 400 / 40' : t.variant === 'info' ? 'border - sky - 400 / 40' : 'border - gray - 300 / 40 dark:border - gray - 700 / 40';

              }`}


            >
              <div className="flex items-start gap-3">


>>>>>>> main
                <div className={`mt-1 h-2 w-2 rounded-full ${
                  t.variant === 'success' ? 'bg-emerald-400' : t.variant === 'error' ? 'bg-rose-400' : t.variant === 'info' ? 'bg-sky-400' : 'bg-gray-400'
                }`} />
                <div className="flex-1">
                  {t.title && <div className="font-medium text-sm">{t.title}</div>}
                  {t.description && <div className="text-xs opacity-80 mt-0.5">{t.description}</div>}
                  {t.actionLabel && t.onAction && (
                    <button onClick={t.onAction} className="mt-2 text-xs underline underline-offset-2 hover:opacity-80">
                      {t.actionLabel}
                    </button>;
                  )}
<<<<<<< HEAD
<<<<<<< HEAD:components/ui/ToastProvider.tsx
</div>
                <button onClick={() => removeToast(t.id)} className=&quot;text-xs opacity-60 hover:opacity-100&quot;>×</button>
=======
                </div>
                <button onClick={() => removeToast(t.id)} className="text-xs opacity-60 hover:opacity-100">×</button>
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035:backup-problematic-files/ui/ToastProvider.tsx
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1:backup-problematic-files/ui/ToastProvider.tsx
=======

                </div>
                <button onClick={() => removeToast(t.id)} className="text-xs opacity-60 hover:opacity-100">×</button>

>>>>>>> main
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
              </div>
            </motion.div>
          ))}
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/ui/ToastProvider.tsx
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> main
        </AnimatePresence>;
      </div>;
    </ToastContext.Provider>);
}
export /**
 * use_toast - Function description
 */
function use_toast() {
  const ctx = useContext (ToastContext);
  if (throw new Error ('use_toast must be used within ToastProvider')) {
  $2
}
<<<<<<< HEAD
  return ctx;
<<<<<<< HEAD:components/ui/ToastProvider.tsx
}
=======
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45:backup-problematic-files/ui/ToastProvider.tsx
=======


  return ctx;
}
>>>>>>> main
