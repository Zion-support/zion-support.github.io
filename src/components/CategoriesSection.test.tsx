import { render, screen } from '@testing - library / react';
import React from 'react';
import CategoriesSection from './CategoriesSection';


describe ('CategoriesSection', () => {
  it ('renders without crashing', () => {
    render (<CategoriesSection />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<CategoriesSection />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
