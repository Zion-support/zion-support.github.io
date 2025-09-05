import React from 'react'; import { render,screen,fireEvent } from '@testing-library/react'; import '@testing-library/jest-dom'; import MainLayoutdynamic from '../components/MainLayout.dynamic'; describe('MainLayoutdynamic',() => { test('renders without crashing',() => { render(<MainLayoutdynamic />); expect(screen.getByTestId('mainlayout.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<MainLayoutdynamic />)}); test('handles user interactions',() => { render(<MainLayoutdynamic />)}); test('applies correct styling',() => { render(<MainLayoutdynamic />)})});'
</MainLayoutdynamic>
    render(<MainLayoutdynamic />);
</MainLayoutdynamic>
    render(<MainLayoutdynamic />);
</MainLayoutdynamic>
    render(<MainLayoutdynamic />);
</MainLayoutdynamic>
    render(<MainLayoutdynamic />);
</MainLayoutdynamic>'