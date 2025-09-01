import { render, screen } from '@testing - library / react';
import React from 'react';
import ApiDemo from './ApiDemo';

describe ('ApiDemo', () => {
  it ('renders without crashing', () => {
    render (<ApiDemo />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<ApiDemo />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
