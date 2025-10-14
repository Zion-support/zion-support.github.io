import { use Context } from "react";
import { Analytics Context, Analytics Context Type } from "../contexts/Analytics Context";

export const use Analytics = () => {
  const context = use Context(Analytics Context);
  if (!context) {
    throw new Error("use Analytics must be used within an Analytics Provider");
  }
  return context;
};
