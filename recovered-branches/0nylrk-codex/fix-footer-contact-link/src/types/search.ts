
export interface SearchSuggestion {
export interface SearchSuggestion {;
  text: string;

  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent'

  iconUrl?: string
export interface SearchSuggestion {
export interface SearchSuggestion {};
  text: string;
type: "product" | "category" | "tag" | "skill" | "person" | "recent";
  iconUrl?: string;
}
export interface SearchHighlight {
  before: string;
  match: string;
  after: string;
}
export interface FilterOptions {}
  productTypes: {};
    label: string;
    value: string;
  }[];
  ratingOptions: number[];
;
export interface SearchHighlight {;
  before: string,;
  match: string,;
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',
  icon_url?: string;
}  }[];

  locations: {
  locations: {}
    label: string;
    value: string;
  }[];
  availabilityOptions: {}
    label: string;
    value: string;
  }[];
  ratingOptions: number[];
}

export interface SearchSuggestion {;

}
;
}

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
}
;
export interface SearchSuggestion {
  text: string;
}
export interface SearchSuggestion {};
  text: string;
}

"
  // TODO: Implement
}
  text: string;,
  type: "product" | "category" | "tag" | "skill" | "person" | "recent";"
  iconUrl?: string;
export interface SearchHighlight {
  // TODO: Implement
  before: string;,
  match: string;
  after: string;
export interface FilterOptions {
  // TODO: Implement
  productTypes: {,
  label: string;
    value: string;
  }[];
  locations: {,
  availabilityOptions: {,
  ratingOptions: number[];

export interface SearchSuggestion {;

;

  text:string,;"
  type:'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',;
  iconUrl?:string;
export interface SearchHighlight {;
  before:string,;
  match:string,;
  after:string;
export interface FilterOptions {;
  productTypes: {;,
  label:string,;
    value:string;
  }[],;
  locations: {;,
  availabilityOptions: {;,
  ratingOptions:number[];
  label: string,;
  // TODO: Implement
  text: string;
pr-12325
