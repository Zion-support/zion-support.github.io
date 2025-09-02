import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string}

export function Card({ children, className }: Props) {
  return <div className={className}>{children}</div>}

export function CardHeader({ children, className }: Props) {
  return <div className={className}>{children}</div>}

export function CardTitle({ children, className }: Props) {
  return <h3 className={className}>{children}</h3>}

export function CardContent({ children, className }: Props) {
  return <div className={className}>{children}</div>}

export default Card;
