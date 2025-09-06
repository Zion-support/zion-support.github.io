export interface SearchSuggestion {
  text: string;
  type: "product" | "category" | "tag" | "skill" | "person" | "recent";
  iconUrl?: string;
}
<<<<<<< HEAD
;
export interface SearchHighlight {;
  before: string,;
  match: string,;
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',
  icon_url?: string;
}
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export interface SearchHighlight {
  before: string;
  match: string;
  after: string;
}
export interface FilterOptions {
  productTypes: {
<<<<<<< HEAD

=======
    label: string;
    value: string;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
  }[];
  locations: {
    label: string;
    value: string;
  }[];
  availabilityOptions: {
    label: string;
    value: string;
  }[];
  ratingOptions: number[];
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5


export interface SearchSuggestion {;

}
;
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
}
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
;
export interface SearchSuggestion {
  text: string;
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
