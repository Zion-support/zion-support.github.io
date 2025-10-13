import React from 'react';

interface errorHandlerProps {
interface ErrorhandlerxProps {
  className?: string;
}

export default function errorHandler({ className = '', children }: errorHandlerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
    <div>
      <h1>Component</h1>
const Errorhandlerx: React.FC<ErrorhandlerxProps> = ({ className = "" }) => {
    <div className={className}>
      <h2>Errorhandlerx</h2>
};


export default Errorhandlerx;

export default function Errorhandler({ className = '', children, ...props }: ErrorhandlerProps) {
export default $1;
