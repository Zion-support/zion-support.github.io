<<<<<<< HEAD
import _React from';react'';import { Loader2 export const LoadingOverlay = ({ visible = false }) => {' if (!visible) return null return (<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>' <Loader2 className='h-8 w-8 animate-spin text-white'/>' </div>)}';"export": default LoadingOverlay'';''';
import _React from';react'';import { Loader2 export const LoadingOverlay = ({ visible = false }) => {' if (!visible) return null return (<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>' <Loader2 className='h-8 w-8 animate-spin text-white'/>' </div>)}';"export": default LoadingOverlay'';''';
=======
import React from 'react';

const LoadingOverlay = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>LoadingOverlay</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default LoadingOverlay;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
