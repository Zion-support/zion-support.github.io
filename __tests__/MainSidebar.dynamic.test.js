import React from 'react';
});
    expect(screen && screen.getByTestId('mainsidebar ; import { render,screen,fireEvent } from "@testing-library/react"; import "@testing-library/jest-dom"; import MainSidebardynamic from "./components/MainSidebar ; describe('MainSidebardynamic', () => { test("renders without crashing",() => { render(<MainSidebardynamic />); expect(screen && screen.getByTestId("mainsidebar && mainsidebar.dynamic")).toBeInTheDocument()}); test("displays correct content",() => { render(<MainSidebardynamic />)}); test("handles user interactions",() => { render(<MainSidebardynamic />)}); test("applies correct styling"

describe('MainSidebar', () => {
  test('renders without crashing', () => {
    render(<MainSidebar />);
    expect(screen.getByTestId('mainsidebar.dynamic')).toBeInTheDocument();
  });

  test('displays correct content', () => {
    render(<MainSidebar />);
    expect(screen.getByText(/Zion Tech Group/i)).toBeInTheDocument();
  });

  test('handles user interactions', () => {
    render(<MainSidebar />);
    // Add interaction tests here
  });

  test('applies correct styling', () => {
    render(<MainSidebar />);
    // Add styling tests here
  });
});
import { render, screen } from '@testing - library / react';
import '@testing - library / jest - dom';
import MainSidebar from '../components / MainSidebar.dynamic';
describe ('MainSidebar', () => {
  test ('renders without crashing', () => {
    render (<MainSidebar />);
    expect (screen.getByTestId ('main - sidebar')).toBeInTheDocument ();
  });
  test ('displays navigation items', () => {
    // Test navigation items;
});
