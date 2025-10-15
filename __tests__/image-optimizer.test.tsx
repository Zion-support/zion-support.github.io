<<<<<<< HEAD
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ImageOptimizer from '../app/components/ImageOptimizer'
=======
<<<<<<< HEAD
import React from 'react";";";";
import { render, screen } from '@testing-library/react";";";";
import '@testing-library/jest-dom";";";";
import ImageOptimizer from '../app/components/ImageOptimizer";
// Mock the image loading
const mockImage = {};";
  addEventListener: jest.fn(),";";
  removeEventListener: jest.fn(),;";";";
  src: '',";
  onload: null,";
  onerror: null";";
};";";";
// Mock window.Image"
Object.defineProperty(window, 'Image', {)}";";
  writable: true,";";
  value: jest.fn(() => mockImage)";";";
}),"
      describe('ImageOptimizer', () => {}";"
  it('renders with default props', () => {}";"
    render(<ImageOptimizer: src ="/test-image.jpg" alt="Test image" />),";"
      expect(screen.getByAltText('Test image')).toBeInTheDocument();";";";";
  }),"
      it('renders with custom width and height', () => {}";";";
    render()";";";
      <ImageOptimizer>"
        src="/test-image.jpg" ";"
        alt="Test image" ";
        width={300};";
        height={200};";";
      />";";";
    );"
    expect(screen.getByAltText('Test image')).toBeInTheDocument();";";";";";";
  });"
  it('applies correct props', () => {}";";";
    render()";";";
      <ImageOptimizer>"
        src="test.jpg" ";"
        alt="Test image" ";"
        className="test-class"";
        width={100};";
        height={100};";";
      />";";";
    );"
    const img = screen.getByAltText('Test image');";"
    expect(img).toHaveAttribute('src', 'test.jpg');";"
    expect(img).toHaveClass('test-class');";";";
  });";";";
});"
=======
import React from 'react';";";";
import { render, screen } from '@testing-library/react';";";";
import '@testing-library/jest-dom';";";";
import ImageOptimizer from '../app/components/ImageOptimizer';";";";

>>>>>>> main
// Mock the image loading
const  mockImage = {}
  addEventListener: jest.fn(),
<<<<<<< HEAD
  removeEventListener: jest.fn(),
  src= '',"
  onload= null,
=======
  removeEventListener: jest.fn(),;
  src: '',";";";
  onload: null,
>>>>>>> main
  onerror: null
}
// Mock window.Image
<<<<<<< HEAD
Object.defineProperty(window, 'Image', {)}"
  writable: true,
  value: jest.fn(() => mockImage)
}),
      describe('ImageOptimizer', () => {}"
  it('renders with default props', () => {}"
    render(<ImageOptimizer: src ="/test-image.jpg" alt="Test image" />),"
      expect(screen.getByAltText('Test image')).toBeInTheDocument();"
  }),
      it('renders with custom width and height', () => {}"
    render()
      <ImageOptimizer>
        src="/test-image.jpg" "
        alt="Test image" "
=======
Object.defineProperty(window, 'Image', {)}";";";
  writable: true,
  value: jest.fn(() => mockImage)
}),
      describe('ImageOptimizer', () => {}";";";
  it('renders with default props', () => {}";";";
    render(<ImageOptimizer: src ="/test-image.jpg" alt="Test image" />),";";
      expect(screen.getByAltText('Test image')).toBeInTheDocument();";";";
  }),
      it('renders with custom width and height', () => {}";";";
    render()
      <ImageOptimizer>
        src="/test-image.jpg" ";";
        alt="Test image" ";";
>>>>>>> main
        width={300} 
        height={200} 

      />
<<<<<<< HEAD
    )
    expect(screen.getByAltText('Test image')).toBeInTheDocument();";"
  })
  it('applies correct props', () => {}"
    render()
      <ImageOptimizer>
        src="test.jpg" "
        alt="Test image" "
        className="test-class""
=======
    );
    
    expect(screen.getByAltText('Test image')).toBeInTheDocument();";";";";";
  });

  it('applies correct props', () => {}";";";
    render()
      <ImageOptimizer>
        src="test.jpg" ";";
        alt="Test image" ";";
        className="test-class"";";
>>>>>>> main
        width={100}
        height={100}

      />
<<<<<<< HEAD
    )
    const  img = screen.getByAltText('Test image');"
    expect(img).toHaveAttribute('src', 'test.jpg');"
    expect(img).toHaveClass('test-class');"
  })
})
=======
    );
    
    const: img = screen.getByAltText('Test image');";";";
    expect(img).toHaveAttribute('src', 'test.jpg');";";";
    expect(img).toHaveClass('test-class');";";";

  });
});
>>>>>>> main
>>>>>>> main
