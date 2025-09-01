import { render, screen } from '@testing - library / react';
import React from 'react';
import Sidebar from './Sidebar';


describe ('Sidebar', () => {
  it ('renders without crashing', () => {
    render (<Sidebar />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<Sidebar />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
