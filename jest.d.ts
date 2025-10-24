<<<<<<< HEAD
"use client";
import React from 'react';

const jest.d.ts = () => {
  return null;
};

export default jest.d.ts;
=======
// Jest type definitions
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
    }
  }
}
>>>>>>> 99cc915ab6ea3b7c6d03b1deab5f3717dd5fff3a
