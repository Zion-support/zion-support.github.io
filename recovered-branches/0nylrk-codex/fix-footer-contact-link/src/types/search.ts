
<<<<<<< HEAD
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',
  icon_url?: string;
}
export interface SearchHighlight {
  before: string;
  match: string,
  after: string;
}
export interface FilterOptions {
  product_types: {
    label: string,
    value: string;
  }[];
  locations: {
=======
export interface SearchSuggestion {
export interface SearchSuggestion {;
  text: string;

  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent'

  iconUrl?: string
}
export interface SearchHighlight {

export interface SearchHighlight {;
  before: string;

  match: string

  after: string
}
export interface FilterOptions {
  productTypes: {

  }[];
  locations: {
    label: string
    value: string
  }[];
  availabilityOptions: {
    label: string

    value: string
  }[];
  ratingOptions: number[]
}
export interface SearchSuggestion {;
  text: string,;
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',;
  iconUrl?: string;
}
;
export interface SearchHighlight {;
  before: string,;
  match: string,;
  locations: {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    label: string,
    value: string;
  }[];
  availability_options: {
    label: string,
    value: string;
  }[];
  rating_options: number[];

<<<<<<< HEAD
}
=======

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

export interface SearchSuggestion {;

}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}

export interface SearchSuggestion {;
  text:string,;
  type:'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',;
  iconUrl?:string;
}
;
export interface SearchHighlight {;
  before:string,;
  match:string,;
  after:string;
}
;
export interface FilterOptions {;
  productTypes:{;
    label:string,;
    value:string;
  }[],;
  locations:{;
    label:string,;
    value:string;
  }[],;
  availabilityOptions:{;
    label:string,;
    value:string;
  }[],;
  ratingOptions:number[];
} 
}
  after: string;
}
;
export interface FilterOptions {;
  productTypes: {;
    label: string,;
    value: string;
  }[],;
  locations: {;
    label: string,;
    value: string;
  }[],;
  availabilityOptions: {;
    label: string,;
    value: string;
  }[];
  ratingOptions: number[];
}
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
