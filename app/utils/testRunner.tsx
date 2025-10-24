"use client";
import React from 'react';

const testRunner = (test: () => void) => {
  try {
    test();
  } catch (error) {
    console.error('Test failed:', error);
  }
};

export default testRunner;