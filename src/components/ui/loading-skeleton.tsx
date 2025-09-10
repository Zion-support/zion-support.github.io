<<<<<<< HEAD
interface SkeletonProps {;
 className?: "string; variant?: 'text' | 'title' | 'paragraph' | 'avatar' | 'card' | 'button'; lines?: number; height?: string; width?: string; ;
"} export function LoadingSkeleton("props": "any) { const baseClasses = 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse'; const variants = { "text": 'h-4 w-full'", "title": 'h-8 w-3/4', "paragraph": 'h-4 w-full', "avatar": 'h-12 w-12 rounded-full', "card": 'h-32 w-full rounded-lg', "button": 'h-10 w-24 rounded-lg' }; const variantClasses = variants[variant]; const customHeight = height ? `h-[${height}]` : ''; const customWidth = width ? `w-[${width}]` : ''; if(variant === 'paragraph' && lines > 1) { return (<div className={`space-y-2 ${className}`}> {Array.from({ "length": "line s   "}).map((_, index) => ( <motion.div key={index} className={`${baseClasses} ${variantClasses} ${customHeight} ${customWidth}`} initial={{ "opacity": "0   "}} animate={{ "opacity": "1   "}} transition={{ "delay": "inde x * 0.1   "}} /> ))} </div> ); } return (<motion.div className={`${baseClasses} ${variantClasses} ${customHeight} ${customWidth} ${className}`} initial={{ "opacity": "0   "}} animate={{ "opacity": "1   "}} /> ); }
interface SkeletonProps {
 className?: string; variant?: 'text' | 'title' | 'paragraph' | 'avatar' | 'card' | 'button'; lines?: number; height?: string; width?: string; 
} export function LoadingSkeleton(props: any) { const baseClasses = 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse'; const variants = { text: 'h-4 w-full', title: 'h-8 w-3/4', paragraph: 'h-4 w-full', avatar: 'h-12 w-12 rounded-full', card: 'h-32 w-full rounded-lg', button: 'h-10 w-24 rounded-lg' }; const variantClasses = variants[variant]; const customHeight = height ? `h-[${height}]` : ''; const customWidth = width ? `w-[${width}]` : ''; if(variant === 'paragraph' && lines > 1) { return (
        <div className={`space-y-2 ${className}`}> {Array.from({ length: line s   }).map((_, index) => ( <motion.div key={index} className={`${baseClasses} ${variantClasses} ${customHeight} ${customWidth}`} initial={{ opacity: 0   }} animate={{ opacity: 1   }} transition={{ delay: inde x * 0.1   }} /> ))} </div>
    ); } return (<motion.div className={`${baseClasses} ${variantClasses} ${customHeight} ${customWidth} ${className}`} initial={{ opacity: 0   }} animate={{ opacity: 1   }} /> ); }
interface SkeletonProps { className?: string; variant?: &apos;text&apos; | &apos;title&apos; | &apos;paragraph&apos; | &apos;avatar&apos; | &apos;card&apos; | &apos;button&apos;; lines?: number; height?: string; width?: string; &apos;;&apos;} export function LoadingSkeleton($1) { const baseClasses = &apos;bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse&apos;; const variants = { text: &apos;h-4 w-full&apos;,title: &apos;h-8 w-3/4&apos;,paragraph: &apos;h-4 w-full&apos;,avatar: &apos;h-12 w-12 rounded-full&apos;,card: &apos;h-32 w-full rounded-lg&apos;,button: &apos;h-10 w-24 rounded-lg&apos; };; const variantClasses = variants[variant]; const customHeight = height ? `h-[${height}]` : &apos; const customWidth = width ? `w-[${width}]` : &apos; if(variant === &apos;paragraph&apos; && lines > 1) { return (<div className={`space-y-2 ${className}`}> {Array.from({ length: line s }).map((_,index) => ( <motion.div key={index} className={`${baseClasses} ${variantClasses} ${customHeight} ${customWidth}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: inde x * 0.1 }} /> ))}; </div> )} return (<motion.div className={`${baseClasses} ${variantClasses} ${customHeight} ${customWidth} ${className}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} /> )}
interface SkeletonProps { className?: string; variant?: "text" | "title" | "paragraph" | "avatar" | "card" | "button"; lines?: number; height?: string; width?: string; ";"} export function LoadingSkeleton($1) { const baseClasses = "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse"; const variants = { text: "h-4 w-full",title: "h-8 w-3/4",paragraph: "h-4 w-full",avatar: "h-12 w-12 rounded-full",card: "h-32 w-full rounded-lg",button: "h-10 w-24 rounded-lg" }; const variantClasses = variants[variant]; const customHeight = height ? `h-[${height}]` : " const customWidth = width ? `w-[${width}]` : " if(variant === "paragraph" && lines > 1) { return (<div className={`space-y-2 ${className}`}> {Array.from({ length: line s }).map((_,index) => ( <motion.div key={index} className={`${baseClasses} ${variantClasses} ${customHeight} ${customWidth}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: inde x * 0.1 }} /> ))}; </div> )} return (<motion.div className={`${baseClasses} ${variantClasses} ${customHeight} ${customWidth} ${className}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} /> )}'`'"`
interface SkeletonProps { className?: string; variant?: 'text' | 'title' | 'paragraph' | 'avatar' | 'card' | 'button'; lines?: number; height?: string; width?: string; ';'} export function LoadingSkeleton(_) { const baseClasses = 'bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded animate-pulse'; const variants = { text: 'h-4 w-full,title: 'h-8 w-3/4,paragraph: 'h-4 w-full,avatar: 'h-12 w-12 rounded-full,card: 'h-32 w-full rounded-lg,button: 'h-10 w-24 rounded-lg' };; const variantClasses = variants[variant]; const customHeight = height ? `h-[${height}]` : ' const customWidth = width ? `w-[${width}]` : ' if(variant === 'paragraph' && lines > 1) { return (<div className={`space-y-2 ${className}`}> {Array.from({ length: line s }).map((_,index) => ( <motion.div key={index} className={`${baseClasses} ${variantClasses} ${customHeight} ${customWidth}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: inde x * 0.1 }} /> ))}; </div> )} return (<motion.div className={`${baseClasses} ${variantClasses} ${customHeight} ${customWidth} ${className}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} /> )}
=======
import React from 'react';
import { cn } from '@/lib/utils';
export function Skeleton({ className, ...props }) {
    return (<div className={cn("animate-pulse rounded-md bg-zion-slate/20", className)} {...props}/>);
}
export function CardSkeleton() {
    return (<div className="rounded-lg border border-zion-slate/20 p-6 space-y-4">
      <Skeleton className="h-4 w-3/4"/>
      <Skeleton className="h-4 w-1/2"/>
      <Skeleton className="h-4 w-2/3"/>
      <div className="flex gap-2">
        <Skeleton className="h-6 w-16"/>
        <Skeleton className="h-6 w-20"/>
      </div>
    </div>);
}
export function ProfileSkeleton() {
    return (<div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Skeleton className="h-16 w-16 rounded-full"/>
        <div className="space-y-2">
          <Skeleton className="h-4 w-32"/>
          <Skeleton className="h-3 w-24"/>
        </div>
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-full"/>
        <Skeleton className="h-4 w-3/4"/>
        <Skeleton className="h-4 w-1/2"/>
      </div>
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 5 }).map((_, i) => (<Skeleton key={i} className="h-6 w-20"/>))}
      </div>
    </div>);
}
export function GridSkeleton({ count = 6 }) {
    return (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (<CardSkeleton key={i}/>))}
    </div>);
}
>>>>>>> origin/backup-improvements-20250827-015311
