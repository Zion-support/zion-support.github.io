import { render, screen } from '@testing - library / react';
import React from 'react';
import ServicesOverview from './ServicesOverview';


describe ('ServicesOverview', () => {
  it ('renders without crashing', () => {
    render (<ServicesOverview />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<ServicesOverview />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
