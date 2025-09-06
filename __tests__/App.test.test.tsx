<<<<<<< HEAD
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from '@jest/globals';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays correct content', () => {
    render(<App />);
  });

  it('handles user interactions', () => {
    render(<App />);
  });
<<<<<<< HEAD
});
=======
=======
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
import { render, screen, describe, it, expect } from 'lucide-react'; import App from '../App'; describe('App',() => { it('renders without crashing',() => { render(<App />); expect(screen.getByRole('main')).toBeInTheDocument()}
}); it('displays correct content',() => { render(<App />)}
}); it('handles user interactions',() => { render(<App />)})}
});'
<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
>>>>>>> e7b4ba039d3ef26c0e950221fd17cd540150e75a
=======
</App>'
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
