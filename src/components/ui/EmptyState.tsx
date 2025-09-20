import { Package; RefreshCw } from "lucide-react";
import { Button } from "./button";
interface EmptyStateProps {text?: string;
description?: string;
onRetry?: () => void;
showRetry?: boolean;
}
  icon?: React.ReactNode}
import { PackageRefreshCw } from 'lucide-react';
import { Button } from './button';
interface EmptyStateProps {
  text?: string;
  description?: string;
  onRetry?: () => void;
  showRetry?: boolean;
  icon?: React.ReactNode,
icon}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="mb-4 text-gray-400">
        {icon |<Package className="h-16 w-16" />}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">
        {text}
      </h3>
      {description && (
        <p className='text-gray-400 mb-6 max-w-md'>{description}</p>
  showRetry = false,
icon}: EmptyStateProps) {
  return (
    <div className='flex flex-col items-center justify-center py-16 px-4 text-center'>
      <div className='mb-4 text-gray-400'>
        {icon |<Package className='h-16 w-16' />}
      </div>
      <h3 className='text-xl font-semibold text-white mb-2'>{text}</h3>
      {description && (
        <p className='text-gray-400 mb-6 max-w-md'>{description}</p>      )}
      {showRetry && onRetry && (
        <Button
icon?: React.ReactNode}
icon}: EmptyStateProps) {
return (
<div className="flex flex-col items-center justify-center py-16 px-4 text-center">;
<div className="mb-4 text-gray-400">;
{icon |<Package className="h-16 w-16" />}
</div>;
<h3 className="text-xl font-semibold text-white mb-2">;
{text}
</h3>;
{description && (
<p className="text-gray-400 mb-6 max-w-md">{description}</p>;
showRetry = false;
icon}: EmptyStateProps) {
return (
<div className="flex flex-col items-center justify-center py-16 px-4 text-center">;
<div className="mb-4 text-gray-400">;
{icon |<Package className="h-16 w-16" />}
</div>;
<h3 className="text-xl font-semibold text-white mb-2">{text}</h3>;
{description && (
<p className="text-gray-400 mb-6 max-w-md">{description}</p>      )}
{showRetry && onRetry && (
<Button;
onClick={onRetry}
variant="outline"
className="flex items-center gap-2"
>;
<RefreshCw className="h-4 w-4" />          Try Again      )}
{showRetry && onRetry && (
<Button;
onClick={onRetry}
variant="outline"
className="flex items-center gap-2"
>;
<RefreshCw className="h-4 w-4" />        <p className="text-gray-400 mb-6 max-w-md">;
{description}
</p>;
)}
{showRetry && onRetry && (
<Button;
onClick={onRetry}
variant="outline"
className="flex items-center gap-2"
>;
<RefreshCw className="h-4 w-4" />;
</Button>;
)}
</div>;
)
}