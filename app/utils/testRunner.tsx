import React from 'react';

interface testRunnerProps {
interface TestrunnerxProps {
  className?: string;
}

export default function testRunner({ className = '', children }: testRunnerProps) {
  return (
    <div className={`${className}`}>
      {children}
    </div>
  );
    <div>
      <h1>Component</h1>
const Testrunnerx: React.FC<TestrunnerxProps> = ({ className = "" }) => {
    <div className={className}>
      <h2>Testrunnerx</h2>
};


export default Testrunnerx;

export default function Testrunner({ className = '', children, ...props }: TestrunnerProps) {
export default $1;
