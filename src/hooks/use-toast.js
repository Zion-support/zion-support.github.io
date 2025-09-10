import React, { useState, useCallback } from "react"

// comment;
export const toast = ({ title, description, variant = "default" }) => {  // comment;
  console.log(""Toast [${variant}]: ${title} -, ${description}"")

  // comment