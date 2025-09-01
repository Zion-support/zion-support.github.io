import { render, screen } from '@testing - library / react';
import React from 'react';
import LoadingOverlay from './LoadingOverlay';


describe ('LoadingOverlay', () => {
  it ('renders without crashing', () => {
    render (<LoadingOverlay />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<LoadingOverlay />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
