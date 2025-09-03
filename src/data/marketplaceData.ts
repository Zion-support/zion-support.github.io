export interface MarketplaceItem {};
    verified: boolean};
  location: string;
  availability: 'available' | 'limited' | 'out-of-stock';
  deliveryTime: string;
  warranty: string}
;
export const marketplaceItems: MarketplaceItem[] = [{};
},;
    location: 'San Francisco, CA',;
    availability: 'available',;
    deliveryTime: '2-3 weeks',;
    warranty: '3 years';,
},;
  {};
},;
    location: 'Remote',;
    availability: 'available',;
    deliveryTime: 'Immediate',;
    warranty: 'N/A';,
},;
  {};
},;
    location: 'Boston, MA',;
    availability: 'limited',;
    deliveryTime: '4-6 weeks',;
    warranty: '1 year';,
},;
  {};
},;
    location: 'Austin, TX',;
    availability: 'available',;
    deliveryTime: '6-8 weeks',;
    warranty: '90 days support';,
},;
  {};
},;
    location: 'Seattle, WA',;
    availability: 'available',;
    deliveryTime: '3-4 weeks',;
    warranty: '2 years';,
},;
  {};
      verified: true},;
    location: 'Remote',;
    availability: 'available',;
    deliveryTime: 'Immediate',;
    warranty: 'N/A'}
];

export ;
    id: 'services',;
    name: 'Services',;
    description: 'Professional services and consulting',;
    count: marketplaceItems.filter(item => item.category === 'services').length}
];

export ;
      { value: '0-1000', label: 'Under $1,000' },;
      { value: '1000-5000', label: '$1,000 - $5,000' },;
      { value: '5000-10000', label: '$5,000 - $10,000' },;
      { value: '10000+', label: 'Over $10,000' }
    options[;';
      { value: '0-1000', label: 'Under $1,000' },';
      { value: '1000-5000', label: '$1,000 - $5,000' },';
      { value: '5000-10000', label: '$5,000 - $10,000' },'      { value: '10000+', label: 'Over $10,000' }
    ];,
},;
  {};
      { value: '4.5+', label: '4.5+ Stars' },;
      { value: '4.0+', label: '4.0+ Stars' },;
      { value: '3.5+', label: '3.5+ Stars' }
    ];,
},;
  {};
    type: 'checkbox' as const}
    options: [;
      { value: 'available', label: 'Available' },;
      { value: 'limited', label: 'Limited' },;
      { value: 'out-of-stock', label: 'Out of Stock' }
    ]}
];
