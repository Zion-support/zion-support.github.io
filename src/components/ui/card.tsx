import React from 'react';

type WithClassName = { children: React.ReactNode; className?: string };

export function Card({ children, className }: WithClassName) { return <div className={className}>{children}</div>; }
export function CardHeader({ children, className }: WithClassName) { return <div className={className}>{children}</div>; }
export function CardTitle({ children, className }: WithClassName) { return <h3 className={className}>{children}</h3>; }
export function CardContent({ children, className }: WithClassName) { return <div className={className}>{children}</div>; }
export function CardFooter({ children, className }: WithClassName) { return <div className={className}>{children}</div>; }

export default Card;

