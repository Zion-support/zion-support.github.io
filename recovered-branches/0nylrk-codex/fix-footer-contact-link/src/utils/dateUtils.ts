  try {
    return format (new Date (date_string), 'PP');
  } catch (e) {
    return date_string;
  }
}
