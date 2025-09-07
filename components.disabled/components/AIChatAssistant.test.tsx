<<<<<<< HEAD
<<<<<<< HEAD
    expect(input).toBeInTheDocument();
  });
});
    expect(input).toBeInTheDocument();
  });
});
=======
=======
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
import React from 'react';
import { render, screen  } from '@testing-library/react';
import '@testing-library/jest-dom';
import AIChatAssistant from '../components/AIChatAssistant';
describe('AIChatAssistant', () => {test('renders without crashing', () => {render(<AIChatAssistant />)expect(screen.getByTestId('aichatassistant')).toBeInTheDocument()})test('displays correct content', () => {render(<AIChatAssistant />)// Add specific content tests here;
  })test('handles user interactions', () => {render(<AIChatAssistant />)// Add interaction tests here;
  })test('applies correct styling', () => {render(<AIChatAssistant />)// Add styling tests here;
  })})
<<<<<<< HEAD
>>>>>>> 470476d15542c973cf650505a68f6472f0b68c9f
=======
>>>>>>> 89e5074e89029fee0b574fe9cfff0a488d2ce422
