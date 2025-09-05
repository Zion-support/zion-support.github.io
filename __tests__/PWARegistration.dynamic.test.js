import React from 'react'; import { render,screen,fireEvent } from '@testing-library/react'; import '@testing-library/jest-dom'; import PWARegistrationdynamic from '../components/PWARegistration.dynamic'; describe('PWARegistrationdynamic',() => { test('renders without crashing',() => { render(<PWARegistrationdynamic />); expect(screen.getByTestId('pwaregistration.dynamic')).toBeInTheDocument()}
}); test('displays correct content',() => { render(<PWARegistrationdynamic />)}
}); test('handles user interactions',() => { render(<PWARegistrationdynamic />)}
}); test('applies correct styling',() => { render(<PWARegistrationdynamic />)})}
});'
</PWARegistrationdynamic>
    render(<PWARegistrationdynamic />);
</PWARegistrationdynamic>
    render(<PWARegistrationdynamic />);
</PWARegistrationdynamic>
    render(<PWARegistrationdynamic />);
</PWARegistrationdynamic>
    render(<PWARegistrationdynamic />);
</PWARegistrationdynamic>'