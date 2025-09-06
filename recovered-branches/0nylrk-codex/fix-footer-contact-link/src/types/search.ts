export interface SearchSuggestion {
  text: string;
  type: "product" | "category" | "tag" | "skill" | "person" | "recent";
  iconUrl?: string;
}
export interface SearchHighlight {
  before: string;
  match: string;
  after: string;
}
export interface FilterOptions {
  productTypes: {
    label: string;
    value: string;
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
=======


export interface SearchSuggestion {;

}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
