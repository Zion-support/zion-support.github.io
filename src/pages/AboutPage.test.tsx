import { render, screen } from '@testing - library / react';
import React from 'react';
import AboutPage from './AboutPage';


describe ('AboutPage', () => {
  it ('renders without crashing', () => {
    render (<AboutPage />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<AboutPage />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
