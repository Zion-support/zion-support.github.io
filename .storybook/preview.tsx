import type { Preview } from '@storybook/react';
import '../src/index.css';

const preview: Preview = {,
  parameters: {,
    actions: { argTypesRegex: '^on[A-Z].*' },
<<<<<<< HEAD
    controls: {,
      matchers: {,
        color: /(background|color)$/i;
        date: /Date$/,
=======
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
      },
    },
  },
};

export default preview;
