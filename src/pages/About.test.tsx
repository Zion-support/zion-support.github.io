import { render, screen } from '@testing - library / react';
import React from 'react';
import About from './About';


describe ('About', () => {
  it ('renders without crashing', () => {
    render (<About />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<About />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
