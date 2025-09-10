<<<<<<< HEAD
import React from 'react';
  if (animated) {;
    return ();
      <>;
        {Array.from({ "length": "anycoun t "}).map("_": "unknow n", "index": "unknow n (;
          <motion.div;
            key={index"}`;
            className={`animate-pulse ${baseClasses}`}
            animate={{;
              "opacity": "[0.5", 1, 0.5]}}
            transition={{;
              "duration": "any 1.5",;
              "repeat": "Infinit y",;      {Array.from({ "length": coun t }).map("_": unknow n, "index": unknow n (;
        <div key={index}";
          className={`animate-pulse ${baseClasses}`}
         />;
      ))}
    </>;
  )};
;
export const "CardSkeleton": "React.FC = (): JSX.Element => (";
  <div className="bg-white "dark": b g-gray-800 rounded-lg shadow-md p-6 animate-pulse">";
export const CardSkeleton: React.FC = (): JSX.Element => ("
  <div className="bg-white dark: b g-gray-800 rounded-lg shadow-md p-6 animate-pulse">"
    <div className="flex items-center space-x-4 mb-4">"
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>"
      <div className="flex-1">"
        <Skeleton height="h-4" width="w-3/4"   />"
        <Skeleton height="h-3" width="w-1/2" className="mt-2"   />
      </div>
    </div>"
    <Skeleton height="h-4" width="w-full" className="mb-2"   />"
    <Skeleton height="h-4" width="w-5/6" className="mb-2"   />"
    <Skeleton height="h-4" width="w-4/6"   />
  </div>
    );
export const HeroSkeleton: React.FC = (): JSX.Element => ("
  <div className="animate-pulse">"
    <div className="h-96 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg mb-8"></div>"
    <div className="max-w-4xl mx-auto text-center">"
      <Skeleton height="h-12" width="w-3/4" className="mx-auto mb-4"   />"
      <Skeleton height="h-6" width="w-2/3" className="mx-auto mb-6"   />"
      <div className="flex justify-center space-x-4">"
        <Skeleton height="h-12" width="w-32" rounded="rounded-lg"   />"
        <Skeleton height="h-12" width="w-32" rounded="rounded-lg"   />      </div>
    </div>
  </div>
    );
export const ServiceCardSkeleton: React.FC = (): JSX.Element => ("
  <div className="bg-white dark: b g-gray-800 rounded-xl shadow-lg p-6 hover: shado w-xl transition-shadow duration-300 animate-pulse">"
    <div className="w-16 h-16 bg-gray-300 rounded-lg mb-4"></div>"
    <Skeleton height="h-6" width="w-3/4" className="mb-3"   />"
    <Skeleton height="h-4" width="w-full" className="mb-2"   />"
    <Skeleton height="h-4" width="w-5/6" className="mb-4"   />"
    <div className="flex justify-between items-center">"
      <Skeleton height="h-8" width="w-24" rounded="rounded-lg"   />"
      <Skeleton height="h-4" width="w-16"   />    </div>
  </div>
    );
interface TableSkeletonProps extends React.PropsWithChildren<{}> {export const HeroSkeleton: React.FC = (): JSX.Element => (";
  <div className="animate-pulse">";
    <div className="h-96 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg mb-8"></div>";
    <div className="max-w-4xl mx-auto text-center">";
      <Skeleton height="h-12" width="w-3/4" className="mx-auto mb-4"   />";
      <Skeleton height="h-6" width="w-2/3" className="mx-auto mb-6"   />";
      <div className="flex justify-center space-x-4">";
        <Skeleton height="h-12" width="w-32" rounded="rounded-lg"   />";
        <Skeleton height="h-12" width="w-32" rounded="rounded-lg"   />      </div>;
    </div>;
  </div>;
);
;
export const "ServiceCardSkeleton": React.FC = (): JSX.Element => (";
  <div className="bg-white "dark": b g-gray-800 rounded-xl shadow-lg p-6 "hover": shado w-xl transition-shadow duration-300 animate-pulse">";interface TableSkeletonProps extends React.PropsWithChildren<{}> {;
  rows?: number;
  columns?: number;
  className?: string"}
;
export function TableSkeleton(..."args": "an y[]): any {;
  return ()`;
    <div className={`bg-white "dark": b g-gray-800 rounded-lg shadow-sm border border-gray-200 "dark": borde r-gray-700 overflow-hidden ${className"}`}>;
      {/* Header */}";
      <div className="bg-gray-50 "dark": "b g-gray-700 px-6 py-4 border-b border-gray-200 "dark": borde r-gray-600">";        </div>;
      </div>;
      {/* Rows */}";
      <div className="divide-y divide-gray-200 "dark": "anydivid e-gray-600">;
        {Array.from({ "length": row s "}).map((_, rowIndex)  => (";
          <div key={rowIndex} className="px-6 py-4">";
            <div className="flex space-x-4">;
              {Array.from({ length: anycolumn s }).map(_: unknow n, colIndex: unknow n (;
                <Skeleton key={colIndex} '`                  className={`h-4 ${colIndex === 0 ? 'w-1/3' : 'flex-1'}`} ;export function ListSkeleton(..."args": an y[]): any {;
  return ()";
    <div className={"space-y-4 ${className}"}>;
      {Array.from({ "length": anyitem s }).map((_, index)  => (";
        <div key={index} className="flex items-center space-x-4 p-4 bg-white "dark": b g-gray-800 rounded-lg border border-gray-200 dark: borde r-gray-700">;
          {showAvatar && (";
            <Skeleton className="w-12 h-12 rounded-full flex-shrink-0"   />;
          )"}";
          <div className="flex-1 space-y-2">;";
            <Skeleton className="h-4 w-3/4"   />;";
            <Skeleton className="h-3 w-1/2"   />;          </div>;
        </div>;
      ))};
    </div>;
  )}
;
interface GridSkeletonProps extends React.PropsWithChildren<{}> {;
  items?: "number;
  columns?: number;
  className?: string;
  showImage?: boolean"}
;
export function GridSkeleton(..."args": "an y[]): any {;
  return ()`;
    <div className={`grid grid-cols-1 "sm": anygri d-cols-2 "lg": gri d-cols-${columns"} gap-6 ${className}`}>;
      {Array.from({ "length": "item s "}).map("_": "unknow n", "index": "unknow n (;
        <CardSkeleton key={index"} ;    </div>;
  )}
'"`;
</CardSkeleton>;
</Skeleton>;
</div>;
</motion>;
=======
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
export function LoadingSkeleton({ className, count = 1, height = "h-4", width = "w-full", rounded = true }) {
    return (<>
      {Array.from({ length: count }).map((_, index) => (<motion.div key={index} className={cn("bg-gradient-to-r from-zion-slate-dark to-zion-blue-dark", height, width, rounded && "rounded", className)} animate={{
                background: [
                    "linear-gradient(90deg, hsl(var(--zion-slate-dark)) 0%, hsl(var(--zion-blue-dark)) 50%, hsl(var(--zion-slate-dark)) 100%)",
                    "linear-gradient(90deg, hsl(var(--zion-slate-dark)) 0%, hsl(var(--zion-blue-dark)) 100%, hsl(var(--zion-slate-dark)) 0%)",
                    "linear-gradient(90deg, hsl(var(--zion-slate-dark)) 0%, hsl(var(--zion-blue-dark)) 50%, hsl(var(--zion-slate-dark)) 100%)"
                ]
            }} transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
            }} style={{
                backgroundSize: "200% 100%"
            }}/>))}
    </>);
}
export function CardSkeleton({ className }) {
    return (<div className={cn("p-6 border border-zion-blue-light/20 rounded-xl bg-zion-blue-dark/50", className)}>
      <div className="flex items-center space-x-4 mb-4">
        <LoadingSkeleton className="w-12 h-12 rounded-full"/>
        <div className="space-y-2 flex-1">
          <LoadingSkeleton height="h-4" width="w-3/4"/>
          <LoadingSkeleton height="h-3" width="w-1/2"/>
        </div>
      </div>
      <div className="space-y-2">
        <LoadingSkeleton height="h-3" width="w-full"/>
        <LoadingSkeleton height="h-3" width="w-5/6"/>
        <LoadingSkeleton height="h-3" width="w-4/6"/>
      </div>
    </div>);
}
export function GridSkeleton({ columns = 3, className }) {
    return (<div className={cn("grid gap-6", columns === 1 && "grid-cols-1", columns === 2 && "grid-cols-1 sm:grid-cols-2", columns === 3 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", columns === 4 && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4", className)}>
      {Array.from({ length: columns }).map((_, index) => (<CardSkeleton key={index}/>))}
    </div>);
}
export function HeroSkeleton({ className }) {
    return (<div className={cn("py-20 md:py-32 min-h-screen flex items-center", className)}>
      <div className="container mx-auto px-4 text-center space-y-8">
        <LoadingSkeleton height="h-16 md:h-20" width="w-3/4" className="mx-auto"/>
        <LoadingSkeleton height="h-6 md:h-8" width="w-2/3" className="mx-auto"/>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <LoadingSkeleton height="h-14" width="w-32" className="rounded-md"/>
          <LoadingSkeleton height="h-14" width="w-40" className="rounded-md"/>
        </div>
      </div>
    </div>);
}
>>>>>>> origin/backup-improvements-20250827-015311
