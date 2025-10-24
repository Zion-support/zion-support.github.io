'use client';
import React from 'react';

// error handler utility
export const errorHandler = (error: Error) => {
  console.error('Error:', error);
  return error;
};