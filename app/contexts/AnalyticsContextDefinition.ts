// Analytics context type definitions
import React from 'react';

export interface Analytics Context Type {
  track Event: (event Name: string, properties?: Record<string, unknown>) => void;
  track Page View: (page Name: string, properties?: Record<string, unknown>) => void;
  identify User: (user Id: string, properties?: Record<string, unknown>) => void;
  set User: (user Id: string, properties?: Record<string, unknown>) => void;
}

export interface Analytics Provider Props {
  children: React.React Node;
}

export interface Analytics Event {
  name: string;
  properties?: Record<string, unknown>;
  timestamp: number;
}