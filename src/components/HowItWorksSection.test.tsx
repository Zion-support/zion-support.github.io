import { render, screen } from '@testing - library / react';
import React from 'react';
import HowItWorksSection from './HowItWorksSection';


describe ('HowItWorksSection', () => {
  it ('renders without crashing', () => {
    render (<HowItWorksSection />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<HowItWorksSection />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
