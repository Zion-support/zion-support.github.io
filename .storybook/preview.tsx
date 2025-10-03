import '../src/index.css';
import type { Preview } from '@storybook/react';

const preview: Preview = {/* content */}
  parameters: {/* content */}
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {/* content */}
      matchers: {/* content */}
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
