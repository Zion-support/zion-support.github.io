export type Badge ={
  id: string;
  label: string;
  threshold: number; // token balance threshold
};

const BADGES: Badge[] = [
