import { render, screen } from '@testing - library / react';
import React from 'react';
import OptimizedImage from './OptimizedImage';


describe ('OptimizedImage', () => {
  it ('renders without crashing', () => {
    render (<OptimizedImage />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<OptimizedImage />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
