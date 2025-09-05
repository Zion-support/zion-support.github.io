import React from 'react'; import { render,screen,fireEvent } from '@testing-library/react'; import '@testing-library/jest-dom'; import Layoutdynamic from '../components/Layout.dynamic'; describe('Layoutdynamic',() => { test('renders without crashing',() => { render(<Layoutdynamic />); expect(screen.getByTestId('layout.dynamic')).toBeInTheDocument()}
}); test('displays correct content',() => { render(<Layoutdynamic />)}
}); test('handles user interactions',() => { render(<Layoutdynamic />)}
}); test('applies correct styling',() => { render(<Layoutdynamic />)})}
});'
</Layoutdynamic>
    render(<Layoutdynamic />);
</Layoutdynamic>
    render(<Layoutdynamic />);
</Layoutdynamic>
    render(<Layoutdynamic />);
</Layoutdynamic>
    render(<Layoutdynamic />);
</Layoutdynamic>'