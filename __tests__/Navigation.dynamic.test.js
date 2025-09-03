

import { render, screen, fireEvent } from '@testing-library/react';
import @testing-library/jest-dom';
import Navigationdynamic from "../components/Navigation.dynamic";

  test('renders without crashing', () => {
    render(<NavigationDynamic />);
    expect(screen.getByTestId('navigation.dynamic')).toBeInTheDocument()})
'
  test('displays correct content', () => {
    render(<NavigationDynamic />);

    // Add specific content tests based on component

  test('handles user interactions', () => {
    render(<NavigationDynamic />);
    // Add interaction tests based on component functionality

    // Add styling tests if needed

  })})



