import React { createContext, useContext, useState, useCallback } from "react"
interface Toast {;
  id: string,"
  type "success" | "error" | "warning" | "info";",
  title: string,"react;
  id: string,"
  type &apos;success&apos; | &apos;error&apos; | &apos;warning&apos; | &apos,info"
  titl,e: string,"
interface Toast {""
  type "success" | "error" | "warning" | "info";
title: string;
  message?: string,  duration?: number  }
interface ToastContextType {;
interface ToastContextType {

  toasts: Toast[],"
  addToast: (void",") => $3,removeToast: (id: string) => voi,d}
const _ToastContext = createContext<ToastContextType | undefined>(undefined);
const _ToastContext = createContext<ToastContextType | undefined>(undefined)


export function ToastProvider({ children }: { children: React.ReactNode}) {