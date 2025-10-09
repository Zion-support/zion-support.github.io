
// Semantic HTML utilities
export const semanticUtils = {
  // Create proper heading hierarchy
  createHeadingProps: (level, id) => ({
    id: id || `heading-${level}-${Math.random().toString(36).substr(2, 9)}`,
    role: 'heading',
    'aria-level': level
  }),
  
  // Create landmark regions
  createLandmarkProps: (type, label) => ({
    role: type,
    'aria-label': label
  }),
  
  // Create accessible lists
  createListProps: (type = 'list') => ({
    role: type,
    'aria-label': `${type} of items`
  }),
  
  // Create accessible tables
  createTableProps: (caption) => ({
    role: 'table',
    'aria-label': caption
  })
};
