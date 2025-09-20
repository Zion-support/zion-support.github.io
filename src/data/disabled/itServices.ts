import React from "react";

export interface ITService {
  
id: string;
title: string;
description: string;
category: string;
subcategory: string;
pricing: {
hourly: number;
daily: number;
