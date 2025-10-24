"use client";
import React from 'react';

const errorHandler = (error: Error) => {
  console.error('Error:', error);
  return error;
};

export default errorHandler;