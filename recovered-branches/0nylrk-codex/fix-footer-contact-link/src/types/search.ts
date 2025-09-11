
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
=======
=======  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

export interface SearchSuggestion {;

}
;
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
=======>>>>>>> cursor/fix-website-loading-errors-and-merge-6662=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
