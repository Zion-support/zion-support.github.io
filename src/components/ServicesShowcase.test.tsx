import { render, screen } from '@testing - library / react';
import React from 'react';
import ServicesShowcase from './ServicesShowcase';


describe ('ServicesShowcase', () => {
  it ('renders without crashing', () => {
    render (<ServicesShowcase />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<ServicesShowcase />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
