export interface SearchSuggestion {
  text: string;
  type: "product" | "category" | "tag" | "skill" | "person" | "recent";
  iconUrl?: string;
}
;
export interface SearchHighlight {;
  before: string,;
  match: string,;
  type: 'product' | 'category' | 'tag' | 'skill' | 'person' | 'recent',
  icon_url?: string;
}  }[];
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
export interface SearchSuggestion {;

}
;
;
export interface SearchSuggestion {
  text: string;

}
