import { render, screen } from '@testing - library / react';
import React from 'react';
import BlogPage from './BlogPage';


describe ('BlogPage', () => {
  it ('renders without crashing', () => {
    render (<BlogPage />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<BlogPage />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
